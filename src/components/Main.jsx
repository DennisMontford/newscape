export default function Main(props) {
  const { data } = props
  return (
    <div className="imgcontainer">
      <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage" />
    </div>
  )
}
