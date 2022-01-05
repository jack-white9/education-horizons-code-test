import { useRef, useEffect } from 'react';

const Canvas = (props) => {

    const canvasRef = useRef(null);

    const draw = ctx => {
        ctx.fillStyle = '#000'
        ctx.fillStyle = '#000'
        ctx.fillRect(100, 100, 1, 1)
    }


    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        canvas.width = props.width
        canvas.height = props.height
        
        draw(context)
    }, [draw])

    return (
        <canvas ref={canvasRef}/>
    )
}

export default Canvas
