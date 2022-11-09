import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const img = form.url.value;
    const price = form.expense.value;
    const rating = parseFloat(form.rate.value).toFixed(1);
    const description = form.message.value;

    const service = {
      img,
      title,
      description,
      price,
      rating,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast.success("Service added successfully");
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="w-1/2 mt-6 mx-auto">
      <h1 className="text-3xl text-center font-bold">Add a Service</h1>
      <form onSubmit={handleAddService} className="card-body">
        <div className="grid grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service title</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service photo url</span>
            </label>
            <input
              type="text"
              name="url"
              placeholder="Photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="expense"
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="text"
              name="rate"
              placeholder="Ratings"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="message"
            className="textarea textarea-bordered h-24 w-full"
            placeholder="Service description"
            required
          ></textarea>
        </div>
        <div className="form-control mt-2">
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddService;
