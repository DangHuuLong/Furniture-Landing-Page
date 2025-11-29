const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema(
  {
    mainImage: { type: String, required: true },
    subImages: [{ type: String }],
  },
  { _id: false }
);

const DescriptionSchema = new mongoose.Schema(
  {
    short: String,
    full: String,
  },
  { _id: false }
);

const GeneralSchema = new mongoose.Schema(
  {
    SalesPackage: String,
    ModelNumber: String,
    SecondaryMaterial: String,
    Configuration: String,
    UpholsteryMaterial: String,
    UpholsteryColor: String,
  },
  { _id: false }
);

const ProductInfoSchema = new mongoose.Schema(
  {
    FillingMaterial: String,
    FinishType: String,
    AdjustableHeadrest: String,
    MaximumLoadCapacity: String,
    OriginOfManufacture: String,
  },
  { _id: false }
);

const DimensionsSchema = new mongoose.Schema(
  {
    Width: String,
    Height: String,
    Depth: String,
    Weight: String,
    SeatHeight: String,
    LegHeight: String,
  },
  { _id: false }
);

const WarrantySchema = new mongoose.Schema(
  {
    WarrantySummary: String,
    WarrantyServiceType: String,
    CoveredInWarranty: String,
    NotCoveredInWarranty: String,
    DomesticWarranty: String,
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    SKU: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },

    price: { type: Number, required: true },
    unit: { type: String, default: 'VND' },

    stock: { type: Number, default: 0 },
    isNew: { type: Boolean, default: false },
    discount: { type: Number, default: 0 }, // %

    intendedUse: String,

    images: ImageSchema,
    description: DescriptionSchema,

    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },

    size: [{ type: String }],
    colors: [{ type: String }],
    tags: [{ type: String }],

    General: GeneralSchema,
    Product: ProductInfoSchema,
    Dimensions: DimensionsSchema,
    Warranty: WarrantySchema,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
