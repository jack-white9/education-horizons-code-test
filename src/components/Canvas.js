import { useRef, useEffect } from 'react';

const Canvas = (props) => {

    const canvasRef = useRef(null);

    const draw = (ctx, color, x, y) => {
        ctx.fillStyle = color
        ctx.fillRect(x, y, 1, 1) //x, y, height, width
    }


    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        canvas.width = props.width
        canvas.height = props.height
        
        for (let i = 0; i < 32768; i++) {
            const x = i & 255;
            const y = i / 256;

            const r = (i << 3) & 0xff;
            const g = (i >> 2) & 0xff;
            const b = (i >> 7) & 0xff;
            draw(context, `rgb(${r}, ${g}, ${b})`, x, y)
        }
    }, [draw])

    return (
        <canvas ref={canvasRef}/>
    )
}

export default Canvas
