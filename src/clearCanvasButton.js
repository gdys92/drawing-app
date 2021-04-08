import React from 'react'
import { useCanvas } from './canvasContext'

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas()

  return <button onClick={clearCanvas}>Очистить</button>
}