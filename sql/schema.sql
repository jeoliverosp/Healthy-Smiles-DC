-- Servicios
CREATE TABLE servicios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  descripcion TEXT,
  precio NUMERIC(10,2) NOT NULL,
  duracion_min INT NOT NULL
);

-- Profesionales
CREATE TABLE profesionales (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  especialidad TEXT,
  telefono TEXT,
  email TEXT UNIQUE
);

-- Disponibilidad
CREATE TABLE disponibilidad (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profesional_id UUID REFERENCES profesionales(id),
  fecha DATE NOT NULL,
  hora_inicio TIME NOT NULL,
  hora_fin TIME NOT NULL
);

-- Pacientes
CREATE TABLE pacientes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  email TEXT UNIQUE,
  telefono TEXT,
  fecha_nacimiento DATE
);

-- Citas (anti-solape)
CREATE TABLE citas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  servicio_id UUID REFERENCES servicios(id),
  profesional_id UUID REFERENCES profesionales(id),
  paciente_id UUID REFERENCES pacientes(id),
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  CONSTRAINT cita_no_solape EXCLUDE USING gist (
    profesional_id WITH =,
    fecha WITH =,
    tsrange(hora, hora + interval '1 minute' * (SELECT duracion_min FROM servicios WHERE id = servicio_id)) WITH &&
  )
);

-- Testimonios
CREATE TABLE testimonios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  paciente_id UUID REFERENCES pacientes(id),
  mensaje TEXT NOT NULL,
  calificacion INT CHECK (calificacion BETWEEN 1 AND 5),
  fecha DATE DEFAULT CURRENT_DATE
);

-- ContenidoEditable
CREATE TABLE contenido (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  valor TEXT NOT NULL,
  actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
