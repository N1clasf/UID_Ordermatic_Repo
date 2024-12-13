import React from 'react';

type DeliveryObjectFormProps = {
  initialData: {
    name: string;
    weight: string;
    hazardousMaterials: string[];
    otherInfo: string;
  };
  onClose: () => void;
  onSave: (data: {
    name: string;
    weight: string;
    hazardousMaterials: string[];
    otherInfo: string;
  }) => void;
};

const DeliveryObjectForm: React.FC<DeliveryObjectFormProps> = ({
  initialData,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = React.useState(initialData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Delivery Object</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✖
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Weight:</label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Hazardous Materials:
            </label>
            <textarea
              name="hazardousMaterials"
              value={formData.hazardousMaterials.join('\n')}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  hazardousMaterials: e.target.value.split('\n'),
                }))
              }
              className="w-full border rounded px-3 py-2"
              rows={3}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Other Info:</label>
            <textarea
              name="otherInfo"
              value={formData.otherInfo}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              rows={3}
            ></textarea>
          </div>
        </form>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryObjectForm;