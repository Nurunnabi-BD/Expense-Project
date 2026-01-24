import { useForm } from "react-hook-form";
function AddTable({onSubmit}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="form">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    {...register("names", { required: true })}
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-red-500">Name is required</p>
                  )}
                  <label className="label">Amount</label>
                  <input
                    type="number"
                    className="input"
                    placeholder="Amount"
                    {...register("amount", { required: true })}
                  />
                  {errors.amount?.type === "required" && (
                    <p className="text-red-500">Amount is required</p>
                  )}
                  <label className="label">Choose Category</label>
                  <select
                    className="select select-primary"
                    {...register("category")}
                  >
                    <option value={"Business"}>Business</option>
                    <option value={"Personal"}>Personal</option>
                    <option value={"Tour"}>Tour</option>
                  </select>
                  <button className="btn btn-neutral mt-4">Add Expense</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTable;
