import { SubmitHandler, useForm } from "react-hook-form";
import SectionTitle from "../Home/SectionTitle";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import { useCreateProductMutation } from "../../redux/features/createProductsApi";
import Button from "../../components/ui/Button";

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

      reset();
      
      



    } catch (error) {
      console.log(error);
      
    }
    
  }

  return (
    <div className="py-40 max-w-7xl mx-auto">
      <SectionTitle title="Add a Product" />
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-[600px] shrink-0 shadow-2xl">
            <form className="card-body pb-10" onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" label="Name" placeholder="Product Name" name="name" register={register}/>
                {errors.name && <span>Name is required</span>}
                <TextArea label="Description" 
                placeholder="Product Description" name="description" register={register} />
                <Input type="text" label="Image" placeholder="Product Image" name="image" register={register} />
                <div className="flex gap-5">
                <div className="w-1/2">
                <Input type="text" label="Brand" placeholder="Brand Name" name="brand" register={register} />
                </div>
                <div className="w-1/2">
                <Input type="number" label="Price" placeholder="Product Price" name="price" register={register} />
                </div>
                
                </div>
                <div className="flex gap-5">
                <div className="w-1/2"> 
                <Input type="number" label="rating" placeholder="Product Rating" name="rating" register={register}  />
                </div> 
                <div className="w-1/2"> 
                <Input type="number" label="Quantity" placeholder="Product Quantity" name="quantity" register={register} />
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
