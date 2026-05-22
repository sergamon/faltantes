# Faltantes Colombia MVP

MVP PWA (Next.js + Supabase) para intercambiar monas/láminas en Colombia.

## Funcionalidades
- Landing, onboarding y páginas legales.
- Mi álbum (carga rápida faltantes/repetidas por número).
- Motor de matching (función testeable en `lib/matching/engine.ts`).
- Propuestas de intercambio + flujo WhatsApp.
- Módulo logístico Servientrega manual/mock.
- Módulo de pagos manual/mock y placeholders Wompi/Mercado Pago.
- Panel admin con métricas base.

## Setup
1. `npm install`
2. Copia `.env.example` a `.env.local`
3. Configura Supabase y ejecuta SQL en `supabase/migrations/001_init.sql` y `supabase/seed/seed.sql`
4. `npm run dev`

## Deploy (Vercel + Supabase)
- Importar repo en Vercel.
- Configurar variables de entorno.
- Vincular proyecto Supabase.
- Ejecutar migración/seed en producción.

## Pendientes v2
- Integración real API de Servientrega.
- Integración real de pagos Wompi/Mercado Pago.
- Chat interno ligero.
- Alertas push y reglas premium avanzadas.
