import React, { useEffect, useState } from 'react';
import { CATEGORY_ID_RULES } from '@/lib/helpers';
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

const CATEGORIES = Object.keys(CATEGORY_ID_RULES);

const ProductForm = ({ initialData = null, onSubmit, onCancel }) => {
  const isEditing = Boolean(initialData);

  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    categoria: '',
    descripcion: '',
    imagen: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        nombre: initialData.nombre || '',
        precio: initialData.precio || '',
        categoria: initialData.categoria || '',
        descripcion: initialData.descripcion || '',
        imagen: initialData.imagen || '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Nombre requerido';
    if (!formData.descripcion.trim()) newErrors.descripcion = 'Descripción requerida';
    if (!formData.categoria.trim()) newErrors.categoria = 'Categoría requerida';
    if (!formData.precio || Number(formData.precio) <= 0)
      newErrors.precio = 'Precio válido requerido';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!formData.imagen)
    newErrors.imagen = 'Imagen requerida';

    onSubmit(formData);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div className='flex flex-col'>
          <div className='flex sm:flex-row justify-between sm:items-center flex-col'>
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="sm:w-[80%] w-full border px-3 py-2 rounded"
              placeholder="Nombre"
            />
          </div>
          {errors.nombre && <p className="text-sm text-red-500 text-right">{errors.nombre}</p>}
        </div>

        {/* Precio */}
        <div className='flex flex-col'>
          <div className='flex lg:flex-row sm:flex-row justify-between sm:items-center flex-col'>
            <label className="block text-sm font-medium mb-1">Precio</label>
            <input
              type="number"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              className="sm:w-[80%] w-full border px-3 py-2 rounded"
              placeholder="Precio"
            />
          </div>
          {errors.precio && <p className="text-sm text-red-500 text-right">{errors.precio}</p>}
        </div>

        {/* Categoría */}
        <div className='flex flex-col'>
          <div className='flex sm:flex-row justify-between sm:items-center flex-col'>
            <label className="block text-sm font-medium mb-1">Categoría</label>
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              disabled={isEditing}
              className="sm:w-[80%] w-full border px-3 py-2 rounded bg-white disabled:bg-gray-100"
            >
              <option value="">Selecciona una categoría</option>

              {CATEGORIES.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </option>
              ))}
            </select>
          </div>
          {isEditing && (
            <p className="text-xs text-gray-500 mt-1">
              La categoría no puede modificarse en edición
            </p>
          )}
          {errors.categoria && <p className="text-sm text-red-500 text-right">{errors.categoria}</p>}
        </div>

        {/* Descripción */}
        <div className='flex flex-col'>
          <div className='flex sm:flex-row justify-between sm:items-center flex-col'> 
            <label className="block text-sm font-medium mb-1">Descripción</label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              className="sm:w-[80%] w-full border px-3 py-2 rounded resize-none"
              rows={3}
              minLength={10}
              maxLength={200}
              placeholder="Descripción entre 10 y 200 caracteres"
            />
          </div>
          
          {errors.descripcion && (
            <p className="text-sm text-red-500 text-right">{errors.descripcion}</p>
          )}
        </div>

        {/* Imagen */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium mb-1">Imagen</label>

          <FileUploaderRegular
            pubkey={import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY}
            multiple={false}
            imgOnly
            maxLocalFileSizeBytes={2_000_000} // 2MB
            sourceList="local, camera"
            onFileUploadSuccess={(file) => {
              setFormData(prev => ({
                ...prev,
                imagen: file.cdnUrl, // 👈 URL pública
              }));
            }}
          />
          {errors.imagen && (
            <p className="text-sm text-red-500 mt-1">{errors.imagen}</p>
          )}
          {formData.imagen && (
            <img
              src={formData.imagen}
              alt="preview"
              className="mt-3 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="border px-4 py-2 rounded"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            {isEditing ? 'Guardar cambios' : 'Crear producto'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;