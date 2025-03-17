import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/About/Products/${product.id}`} className="block">
      <div className="bg-gray-100 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform text-black  cursor-pointer h-96 flex flex-col justify-baseline">
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-52 object-cover rounded-t-lg hover:scale-105 duration-200"
          />
        </div>

        <div className="px-4 ">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-green-600 font-semibold mt-2">
            Price: ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
