import React from "react";

function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      <i class="fa-regular fa-tombstone" />
    </span>
  );
}

export default DeleteBtn;
