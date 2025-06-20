import {star} from '../assets/icons'

type ReviewProps = {
    imgURL: string;
    customerName: string;
    rating: number;
    feedback: string;
}

const ReviewCard = (props: ReviewProps) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={props.imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6 max-w-sm text-center info-text'>{props.feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-slate-gray'>({props.rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {props.customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;