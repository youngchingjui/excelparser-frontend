import PlusIcon from "../../../../public/static/assets/svg/plus.svg"

const _EmptyField = ({ setModalShow }) => {
  return (
    <span class="emptyField" onClick={() => setModalShow(true)}>
      <PlusIcon /> Add field
    </span>
  )
}

export default _EmptyField
