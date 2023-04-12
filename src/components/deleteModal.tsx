import React from "react";

function DeleteModal() {
  const cancelDelete = () => {};
  const handleDelete = () => {};
  return (
    <div className="">
      <div className="">
        <h1 className="">Delete comment</h1>
        <p className="">
          Are you sure you want to delete this comment? This will remove the
          comment and can&apos;t be undone.
        </p>
        <div className="">
          <button className="" onClick={cancelDelete}>
            No, cancel
          </button>
          <button className="" onClick={handleDelete}>
            Yes, delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
