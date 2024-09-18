/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from "react-hook-form";
import SectionTitle from "../Home/SectionTitle";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import { useCreateProductMutation } from "../../redux/features/createProductsApi";
import Button from "../../components/ui/Button";
import { toast } from "sonner";

const AddProduct = () => {
  type Inputs = {
    name: string,
    description: string,
    image: string,
    brand: string,
    price: number,
    rating: number,
    quantity: number
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();

  const [createProduct] = useCreateProductMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
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

      console.log(res);

      toast.success("Product added successfully", { id: toastId, duration: 2000 });

      reset();
      
      



    } catch (err: any) {
      console.log(err);
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
                <Input label="Name" placeholder="Product Name" name="name" register={register}/>
                {errors.name && <span className="text-red-700">Name is required</span>}
                <TextArea label="Description" 
                placeholder="Product Description" name="description" register={register} />
                {errors.description && <span className="text-red-700">Description is required</span>}
                <Input label="Image" placeholder="Product Image" name="image" register={register} />
                {errors.image && <span className="text-red-700">Image is required</span>}
                <div className="flex gap-5">
                <div className="w-1/2">
                <Input label="Brand" placeholder="Brand Name" name="brand" register={register} />
                {errors.brand && <span className="text-red-700">Brand is required</span>}
                </div>
                <div className="w-1/2">
                <Input label="Price" placeholder="Product Price" name="price" register={register} />
                {errors.price && <span className="text-red-700">Price is required</span>}
                </div>
                
                </div>
                <div className="flex gap-5">
                <div className="w-1/2"> 
                <Input label="rating" placeholder="Product Rating" name="rating" register={register}  />
                {errors.rating && <span className="text-red-700">Product Rating is required</span>}
                </div> 
                <div className="w-1/2"> 
                <Input label="Quantity" placeholder="Product Quantity" name="quantity" register={register} />
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
