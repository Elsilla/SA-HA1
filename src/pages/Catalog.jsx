import ThematicCollection from "@/components/ThematicCollection";
import { collections } from "@/lib/thematic-collection";

const Catalog = () => {
  return (
    <div className="container-catalog">
      <ThematicCollection collections={collections}/>
    </div>
  );
};

export default Catalog;
