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

        let colorArray = []

        // Generate all 8-step values from rgb(0,0,0) to rgb(256,256,256) into array
        for (let i = 1; i < 33; i++) {
            const red = i * 8
            for (let i = 1; i < 33; i++) {
                const green = i * 8
                for (let i = 1; i < 33; i++) {
                    const blue = i * 8
                    colorArray.push({
                        red: red,
                        green: green,
                        blue: blue
                    })
                }
            }   
        }

        // Draw all values from array of colours
        for (let i = 0; i < 32768; i++) {
            const x = i & 255;
            const y = i / 256;
            draw(context, `rgb(${colorArray[i].red}, ${colorArray[i].green}, ${colorArray[i].blue})`, x, y)
        }
    })


    return (
        <canvas ref={canvasRef} />
    )
}

export default Canvas