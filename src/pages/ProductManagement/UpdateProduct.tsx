import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import { useUpdateProductMutation } from "../../redux/features/updateProductApi";
import { TUpdateProps } from "./ProductManagement";
import Button from "../../components/ui/Button";
import { toast } from "sonner";

const UpdateProduct = ({
  product,
  refetch,
}: {
  product: TUpdateProps;
  refetch: VoidFunction;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdateProps>();

  const [updateProduct] = useUpdateProductMutation();

  const onSubmit: SubmitHandler<TUpdateProps> = async (data) => {
    const id = product._id;
    const productUpdatedData = {
      name: data.name,
      description: data.description,
      image: data.image,
      brand: data.brand,
      price: Number(data.price),
      rating: Number(data.rating),
      quantity: Number(data.quantity),
    };

    const res = await updateProduct({productUpdatedData, id}).unwrap();

    if(res.success){
      toast.success('Product successfully updated!')
      refetch();
    }
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0">
          <form className="card-body p-0" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Name"
              value={product.name}
              name="name"
              register={register}
            />
            {errors.name && (
              <span className="text-red-500">required field</span>
            )}
            <TextArea
              label="Description"
              value={product.description}
              name="description"
              register={register}
            />
            <Input
              label="Image"
              value={product.image}
              name="image"
              register={register}
            />
            <div className="flex gap-5">
              <div className="w-1/2">
                <Input
                  label="Brand"
                  value={product.brand}
                  name="brand"
                  register={register}
                />
              </div>
              <div className="w-1/2">
                <Input
                  label="Price"
                  value={product.price}
                  name="price"
                  register={register}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-1/2">
                <Input
                  label="rating"
                  value={product.rating}
                  name="rating"
                  register={register}
                />
              </div>
              <div className="w-1/2">
                <Input
                  label="Quantity"
                  value={product.quantity}
                  name="quantity"
                  register={register}
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <Button title="update product" />
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
