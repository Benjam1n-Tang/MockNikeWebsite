

type ShoeProps = {
    imgUrl: any,
    changeBigShoeImg: (arg: any) => any,
    bigShoeImg: any,
}



const ShoeCard = (props: ShoeProps) => {

  const handleClick = () => {
    if (props.bigShoeImg !== props.imgUrl.bigShoe) {
      props.changeBigShoeImg(props.imgUrl.bigShoe);
    }
  }; 
  return (
    <div
      className={`border-2 rounded-xl ${
        props.bigShoeImg === props.imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
        <div className='flex justify-center items-center bg-center bg-cover bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            
            <img
                src={props.imgUrl.thumbnail}
                alt="Shoe Collection"
                width={127}
                height={103}
                className="object-contain"
            />
        </div>
    </div>
  )
}

export default ShoeCard