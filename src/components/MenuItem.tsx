import { MenuItems } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Youtube from "./ui/youtube";

type Props = {
  menuItem: MenuItems;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer border border-gray-200 rounded-lg p-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out" onClick={addToCart}>
      <div className="flex items-center justify-between">
        <div>
          <CardHeader className="font-mono text-2xl">
            <CardTitle>{menuItem.name}</CardTitle>
          </CardHeader>
          <CardContent className="font-bold text-gray-800 transform translate-y-8">
            ₹{(menuItem.price / 100).toFixed(2)}
          </CardContent>
          <CardContent className="text-gray-400 transform translate-y-4">
            Calorie-{menuItem.calorie} Kcal
          </CardContent>
        </div>
        <div className="ml-4 rounded-md overflow-hidden">
          <Youtube video_src={menuItem.youtube_src} />
        </div>
      </div>
    </Card>
  );
};

export default MenuItem;
