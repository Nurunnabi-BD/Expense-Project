function Content({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <>
      <h1 className="text-center mt-10 text-2xl font-bold">No Expenses Available</h1>
    </>;
  }
  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 m-auto p-4 mt-10 w-3/4">
        <h1 className="text-center text-2xl font-bold mb-4">Expense List</h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <th>{expense.id}</th>
                <td>{expense.names}</td>
                <td>{expense.category}</td>
                <td>${expense.amount}</td>
                <td>
                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th>Total</th>
              <th>
                $
                {expenses.reduce((total, expense) => total + parseInt(expense.amount), 0)}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
export default Content;
