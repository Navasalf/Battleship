export function Celda({ x, y, estado, onClick}) {
    const estilos = {
        backgroundColor: estado === 'occupied' ? 'blue' : 'white',
      };
  
    return (
      <td className="celda" style={estilos} onClick={() => onClick(x, y)}>
      </td>
    );
  }
