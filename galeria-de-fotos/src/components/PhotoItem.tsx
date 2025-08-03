import type { Photo } from "../types/Photo";

type Props = {
    photo: Photo;
    onClick: () => void;
}
export const PhotoItem = ({ photo, onClick }: Props) => {
    return (
        <div onClick={onClick} className="cursor-pointer  hover:opacity-70 ">
            <img src={`/assets/${photo.url}`} alt="" className="w-full h-full object-cover rounded-xl " />
        </div>
    );
}