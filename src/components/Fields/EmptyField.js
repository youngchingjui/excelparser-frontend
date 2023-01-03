import PlusIcon from "../../../public/static/assets/svg/plus.svg"

const EmptyField = ({ setModalShow, text }) => {
  return (
    <span className="emptyField" onClick={() => setModalShow(true)}>
      <PlusIcon /> {text}
    </span>
  )
}

export default EmptyField
