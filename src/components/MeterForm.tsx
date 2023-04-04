import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface MeterFormInputs {
  fabricante: string;
  marca: string;
  modelo: string;
  tipoMedidor: string;
  estadoFisico: string;
  estadoLogico: string;
  propietario: string;
  clase: string;
  tecnologia: string;
  almacenes: string;
  tipoSello: string;
  colorSello: string;
  ubicacionSello: string;
  tecnicos: string;
  brigadas: string;
}

function asKey(key: string): keyof MeterFormInputs {
  return key as keyof MeterFormInputs;
}

const fields = [
  { id: 'fabricante', label: 'Fabricante', required: true },
  { id: 'marca', label: 'Marca', required: true },
  { id: 'modelo', label: 'Modelo', required: true },
  { id: 'tipoMedidor', label: 'Tipo de medidor', required: true },
  { id: 'estadoFisico', label: 'Estado físico', required: true },
  { id: 'estadoLogico', label: 'Estado lógico', required: true },
  { id: 'propietario', label: 'Propietario', required: true },
  { id: 'clase', label: 'Clase', required: true },
  { id: 'tecnologia', label: 'Tecnología', required: true },
  { id: 'almacenes', label: 'Almacenes', required: true },
  { id: 'tipoSello', label: 'Tipo de sello', required: true },
  { id: 'colorSello', label: 'Color de sello', required: true },
  { id: 'ubicacionSello', label: 'Ubicación de sello', required: true },
  { id: 'tecnicos', label: 'Técnicos', required: true },
  { id: 'brigadas', label: 'Brigadas', required: true },
];

const MeterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<MeterFormInputs>();

  const onSubmit = (data: MeterFormInputs) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gestión de Medidores
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field) => (
            <TextField
              key={field.id}
              id={field.id}
              label={field.label}
              {...register(asKey(field.id), { required: field.required })}
              error={!!errors[asKey(field.id)]}
              helperText={errors[asKey(field.id)] ? 'Este campo es requerido' : ''}
              fullWidth
              margin="normal"
            />
          ))}
          <Button type="submit" variant="contained" color="primary">
            Guardar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default MeterForm;
