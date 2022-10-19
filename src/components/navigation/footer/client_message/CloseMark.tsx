interface CloseMarkType {
  openMenu: () => void;
}

const CloseMark = ({ openMenu }: CloseMarkType) => (
  <i className="fa-solid fa-xmark" onClick={openMenu} />
);

export default CloseMark;
