import { useRef, useEffect } from 'react';
import rgbToHsl from 'rgb-to-hsl';

const Canvas = (props) => {

    const canvasRef = useRef(null);

    const draw = (ctx, color, x, y) => {
        ctx.fillStyle = color
        ctx.fillRect(x, y, 1, 1)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        canvas.width = props.width
        canvas.height = props.height

        let colorArray = []

        // Generate all colours, convert from rgb to hsl, store in array
        for (let i = 1; i < 33; i++) {
            const red = i * 8
            for (let i = 1; i < 33; i++) {
                const green = i * 8
                for (let i = 1; i < 33; i++) {
                    const blue = i * 8
                    const hsl = rgbToHsl(red, green, blue)
                    colorArray.push({
                        h: hsl[0],
                        s: hsl[1],
                        l: hsl[2]
                    })
                }
            }   
        }

        // Sort array by hue for gradient effect
        colorArray.sort((a, b) => parseFloat(a.h) - parseFloat(b.h))

        // Draw all values from array of colours
        let i = 0
        for (let x = 0; x < props.width; x++) {
            for (let y = 0; y < props.height; y++) {
                draw(context, `hsl(${colorArray[i].h}, ${colorArray[i].s}, ${colorArray[i].l})`, x, y)
                i++
            }
        }

    })


    return (
        <canvas ref={canvasRef} />
    )
}

export default Canvas