
const RestaurantDetails = ({ restaurant }) => {
  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-3xl mb-6">Willkommen {restaurant.data.name}</h1>
      <p>{restaurant.data.description}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  
  const res = await fetch('https://feerd.directus.app/items/restaurants');
  const restaurants = await res.json()
  
  const paths = restaurants.data.map(({id}) => ({
    params: {
      id: id.toString()
    }
  }))

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  
  const res = await fetch('https://feerd.directus.app/items/restaurants/' + params.id);
  
  const restaurant = await res.json();

  return {
    props: { restaurant }
  }
};

export default RestaurantDetails;