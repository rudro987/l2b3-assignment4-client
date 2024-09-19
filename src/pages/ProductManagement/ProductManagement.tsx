/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useGetAllProductsQuery } from "../../redux/features/getAllProductsApi";
import SectionTitle from "../Home/SectionTitle";
import Loader from "../../components/ui/Spinner/Loader";

const ProductManagement = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  
  if(isLoading){
    return <Loader size="160" />
  }
  const products = data.data;

  return (
    <div className="py-20">
      <SectionTitle title="Product Dashboard" />
      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
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
            {
              products?.map((product: Record<string, any>, index: number) =>
                <tr key={index}>
              <th>
                <label>
                  {index + 1}
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={product.image}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.name}</div>
                  </div>
                </div>
              </td>
              <td>
                ${(product.price).toFixed(2)}
              </td>
              <td>
                {(product.quantity)}
              </td>
              <td>{product.brand}</td>
              <td>
                <button><FaEdit size="24" className="text-secondaryColor hover:text-primaryFont" /></button>
              </td>
              <td>
                <button><FaTrashAlt size="24" className="text-primaryFont hover:text-secondaryColor" /></button>
              </td>
            </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
