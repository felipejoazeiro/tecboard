import './suspense-list-styles.css';

export function SuspenseList({itens, ...rest}) {
  return (
    <select className="suspense-list" defaultValue="" {...rest}>
        <option value="" disabled> Selecione uma opção </option>
        {itens.map(function (a) {
            return <option key={a.id} value={a.id}>{a.name}</option>
        })}
    </select>
  );
}