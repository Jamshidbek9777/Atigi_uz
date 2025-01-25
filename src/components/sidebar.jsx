import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-white p-4 rounded-lg shadow-md w-64">
      <h2 className="font-bold text-lg mb-4">Filterlar</h2>

      {/* Category Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">O‘yinchoqlar va o‘yinlar</h3>
        <ul className="space-y-2">
          <li>Yumshoq o‘yinchoqlar</li>
          <li>Moshina o‘yinchoqlar</li>
          <li>Boshqotirma o‘yinchoqlar</li>
          <li>Lego o‘yinchoqlar</li>
          <li>Yumshoq aksessuarlar</li>
        </ul>
      </div>

      {/* Olsh Vaqti Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Olish vaqti</h3>
        <div className="space-y-2">
          <p>1-2 soatga olish</p>
          <p>Bugun yoki ertaga</p>
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Narx, Sum</h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="146 458"
            className="w-20 border px-2 py-1 rounded"
            readOnly
          />
          <span>-</span>
          <input
            type="text"
            placeholder="748 468 416"
            className="w-20 border px-2 py-1 rounded"
            readOnly
          />
        </div>
      </div>

      {/* Discount Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Chegirma</h3>
        <ul className="space-y-2">
          <li>10% va undan yuqori</li>
          <li>30% va undan yuqori</li>
          <li>50% va undan yuqori</li>
          <li>70% va undan yuqori</li>
        </ul>
      </div>

      {/* Brands Section */}
      <div>
        <h3 className="font-semibold mb-2">Brends</h3>
        <div className="h-32 overflow-y-auto border rounded p-2 space-y-2">
          <p>Abtoys</p>
          <p>All About Nature</p>
          <p>Auby</p>
          <p>Angel Collection</p>
          <p>Angel Collection</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
