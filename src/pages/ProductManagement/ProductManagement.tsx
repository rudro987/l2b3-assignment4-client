/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useGetAllProductsQuery } from "../../redux/features/getAllProductsApi";
import SectionTitle from "../Home/SectionTitle";
import Loader from "../../components/ui/Spinner/Loader";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";
import { TInputs } from "./AddProduct";
import { useDeleteProductMutation } from "../../redux/features/deleteProductApi";
import Swal from "sweetalert2";

export interface TUpdateProps extends TInputs {
  _id: string;
}

const ProductManagement = () => {
  const query = {};
  const { data, isLoading, refetch } = useGetAllProductsQuery(query);

  const [deleteProduct] = useDeleteProductMutation();
  const products = data?.data;

  const handleDelete = (id: string) => {
    Swal.fire({
      icon: "error",
      showCloseButton: true,
      showCancelButton: true,
      title: "Are you sure?",
      text: "Deleting a product is irreversible!",
      confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Delete
  `,
  cancelButtonText: `
    <i class="f">Cancel</i>
  `,
  confirmButtonColor: "#D91656",
  cancelButtonColor: "#227B94"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteProduct(id).unwrap();

        res.success && refetch();
      }
    });
  };

  if (isLoading) {
    return <Loader size="160px" />;
  }

  return (
    <div className="py-20 max-w-7xl mx-auto">
      <SectionTitle title="Product Dashboard" />
      <div className="overflow-x-auto">
        <div className="flex justify-end pb-10">
          <Link to="/add-product">
            <Button title="add new product" />
          </Link>
        </div>
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th className="text-left">Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Brand</th>
              <th>Update</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: TUpdateProps, index: number) => (
              <tr key={index}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={product.image} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.quantity}</td>
                <td>{product.brand}</td>
                <td>
                  <button
                    onClick={() =>
                      (
                        document.getElementById(
                          `update-modal${product._id}`
                        ) as HTMLDialogElement
                      )?.showModal()
                    }
                  >
                    <FaEdit
                      size="24"
                      className="text-secondaryColor hover:text-primaryFont"
                    />
                  </button>
                  <dialog id={`update-modal${product._id}`} className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <input
                          type="submit"
                          value="X"
                          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        />
                      </form>
                      <h3 className="font-bold text-lg">Update Product</h3>
                      <UpdateProduct product={product} refetch={refetch} />
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </td>
                <td>
                  <button onClick={() => handleDelete(product._id)}>
                    <FaTrashAlt
                      size="24"
                      className="text-primaryFont hover:text-secondaryColor"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
