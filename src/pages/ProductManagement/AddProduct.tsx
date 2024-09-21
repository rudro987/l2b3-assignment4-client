/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from "react-hook-form";
import SectionTitle from "../Home/SectionTitle";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import { useCreateProductMutation } from "../../redux/features/createProductsApi";
import Button from "../../components/ui/Button";
import { toast } from "sonner";

export type TInputs = {
  name: string,
  description: string,
  image: string,
  brand: string,
  price: number,
  rating: number,
  quantity: number
};

const AddProduct = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TInputs>();

  const [createProduct] = useCreateProductMutation();

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    const toastId = toast.loading("Adding a new Product");
    try {
      const productData = {
        name: data.name,
        description: data.description,
        image: data.image,
        brand: data.brand,
        price: Number(data.price),
        rating: Number(data.rating),
        quantity: Number(data.quantity)
      }

      const res = await createProduct(productData).unwrap();

      toast.success("Product added successfully", { id: toastId, duration: 2000 });

      reset();

    } catch (err: any) {
      toast.error(err.data.errorSources[0].message, { id: toastId, duration: 5000 });
    }
    
  }

  return (
    <div className="py-40 max-w-7xl mx-auto">
      <SectionTitle title="Add a Product" />
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-[600px] shrink-0 shadow-2xl">
            <form className="card-body pb-10" onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" label="Name" placeholder="Product Name" name="name" register={register} required={true} />
                {errors.name && <span className="text-red-700">Name is required</span>}
                <TextArea type="text" label="Description" 
                placeholder="Product Description" name="description" register={register} required={true} />
                {errors.description && <span className="text-red-700">Description is required</span>}
                <Input type="text" label="Image" placeholder="Product Image" name="image" register={register} required={true} />
                {errors.image && <span className="text-red-700">Image is required</span>}
                <div className="flex gap-5">
                <div className="w-1/2">
                <Input type="text" label="Brand" placeholder="Brand Name" name="brand" register={register} required={true} />
                {errors.brand && <span className="text-red-700">Brand is required</span>}
                </div>
                <div className="w-1/2">
                <Input type="text" label="Price" placeholder="Product Price" name="price" register={register} required={true} />
                {errors.price && <span className="text-red-700">Price is required</span>}
                </div>
                
                </div>
                <div className="flex gap-5">
                <div className="w-1/2"> 
                <Input type="text" label="rating" placeholder="Product Rating" name="rating" register={register} required={true}  />
                {errors.rating && <span className="text-red-700">Product Rating is required</span>}
                </div> 
                <div className="w-1/2"> 
                <Input type="text" label="Quantity" placeholder="Product Quantity" name="quantity" register={register} required={true} />
                {errors.quantity && <span className="text-red-700">Quantity is required</span>}
                </div>
                </div>

              <div className="form-control mt-6">
                <Button title="create product" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
