import Marquee from "react-fast-marquee";

// List of brand images and their alt texts
const brandImages = [
    { src: "https://i.ibb.co/9bcQjMh/Pickaboo.png", alt: "Pickaboo" },
    { src: "https://i.ibb.co/0sZttFq/pngegg.png", alt: "Pngegg" },
    { src: "https://i.ibb.co/Jp9n94v/Ali-Express-Logo-wine.png", alt: "Ali Express" },
    { src: "https://i.ibb.co/qJXjTHc/pngwing-com.png", alt: "Pngwing" },
    { src: "https://i.ibb.co/f0HtCDd/pngwing-com-2.png", alt: "Pngwing" },
    { src: "https://i.ibb.co/cyzXc18/Daraz-1.png", alt: "Daraz" },
    { src: "https://i.ibb.co/VN24CFm/Foodpanda-Logo-wine.png", alt: "Foodpanda" },
    { src: "https://i.ibb.co/9vHvRj6/farfetch-logo-vector.png", alt: "Farfetch" },
    { src: "https://i.ibb.co/VCfCR37/FOREO-Logo-500x281.png", alt: "Foreo" },
    { src: "https://i.ibb.co/tKpGVk8/amazon.png", alt: "Amazon" },
    { src: "https://i.ibb.co/1mdKKVm/rokomari.jpg", alt: "Rokomari" },
    { src: "https://i.ibb.co/MB37L9n/bikroy.png", alt: "Bikroy" }
];

const TopBrands = () => {
    return (
        <div>
            <div className="space-y-4">
                <h2 className="text-3xl text-[#E1713B] font-bold text-center">Top Brands</h2>
                <p className="w-full md:w-4/5 mx-auto text-[#394e6a] text-lg text-center font-medium">
                    Explore the finest selection of top brands renowned for their quality and innovation.
                    Let&apos;s dive into their exclusive offerings!
                </p>
            </div>

            <div className="flex items-center mt-10">
                <Marquee>
                    {brandImages.map((brand, index) => (
                        <img key={index} className="w-28 mr-6" src={brand.src} alt={brand.alt} />
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default TopBrands;
