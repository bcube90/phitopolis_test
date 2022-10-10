
export default function ListItem({item}) {
  return (
    <li className="list-group-item py-3">
      <div className="row">
        <div className="col-4 text-center">
          {item.distance}
        </div>
        <div className="col-4 text-center">
          {item.from}
        </div>
        <div className="col-4 text-center">
          {item.to}
        </div>
      </div>
    </li>
  )
}