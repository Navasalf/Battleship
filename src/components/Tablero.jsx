import '../styles/tablero.css';
import { useState } from 'react';
import { Celda } from './Celda';

const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function Tablero () {
  const [board, setBoard] = useState(() => Array(10).fill(Array(10).fill(null)));

  const handleCellClick = (x, y) => {
    // Implement your game logic here (e.g., mark cell as occupied)
    const updatedBoard = [...board];
    updatedBoard[x][y] = 'occupied';
    setBoard(updatedBoard);
  };

  return (
    <div className="tablero">
      <table>
        <tbody>
  
         <tr key="header-row">
            <th key="empty-cell"></th>
            {letras.map((letra) => (
              <th key={`letter-${letra}`}>{letra}</th>
            ))}
          </tr> 
          {numeros.map((numero, index) => (
            <tr key={`number-row-${index}`}>

              <td key={index}>{numero}</td>
              {board[index].map((cellValue, j) => (
                <Celda
                  key={`data-cell-${index}-${j}`}
                  x={index}
                  y={j}
                  estado={cellValue}
                  onClick={handleCellClick}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




