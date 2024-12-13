import React from 'react';
import DeliveryObjectForm from './DeliveryObjectForm';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleSave = (data: any) => {
    console.log('Saved Data:', data);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Open Form
      </button>
      {isModalOpen && (
        <DeliveryObjectForm
          initialData={{
            name: 'Heating Oil',
            weight: '5t',
            hazardousMaterials: ['Oil Hazard Lvl:2'],
            otherInfo: '',
          }}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default App;