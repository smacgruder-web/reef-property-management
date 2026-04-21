import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Panel from '../components/shared/Panel';
import GlassCard from '../components/shared/GlassCard';
import { stitchScreens } from '@/data/stitchScreens';

export default function StitchScreen() {
  const { screen } = useParams();

  const screenConfig = useMemo(
    () => stitchScreens.find((item) => item.slug === screen),
    [screen],
  );

  if (!screenConfig) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-xl rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg">
          <div className="text-2xl font-semibold text-slate-900">Screen not found</div>
          <div className="mt-3 text-sm text-slate-600">The requested Stitch screen does not exist in the current data map.</div>
          <Link className="mt-6 inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90" to="/stitch">
            Back to Stitch library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Panel title={screenConfig.title} subtitle={screenConfig.subtitle}>
        <div className="grid gap-6 xl:grid-cols-[0.65fr_0.35fr]">
          <GlassCard className="overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">
            <img src={screenConfig.previewImage} alt={screenConfig.title} className="h-72 w-full object-cover" />
            <div className="p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Exact Stitch preview</div>
              <div className="mt-4 text-sm leading-7 text-slate-700">
                This screen uses the exact Stitch export asset and the rendered HTML from the Stitch package.
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                  Preview image and exact HTML page are loaded from the Stitch export.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                  The current route renders the Stitch code directly inside an iframe.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                  Use this as the authoritative Stitch design source in the app.
                </li>
              </ul>
            </div>
          </GlassCard>

          <GlassCard className="rounded-[32px] border border-slate-200 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Screen details</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Slug</div>
                <div className="mt-1 font-medium text-slate-900">{screenConfig.slug}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Source</div>
                <div className="mt-1 font-medium text-slate-900">Stitch export asset</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">HTML preview</div>
                <div className="mt-1 font-medium text-slate-900">{screenConfig.codeUrl}</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </Panel>

      <Panel title="Rendered Stitch HTML" subtitle="Exact exported UI from the Stitch package.">
        <div className="rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
          <iframe
            src={screenConfig.codeUrl}
            title={`Stitch screen ${screenConfig.title}`}
            className="h-[900px] w-full border-0"
          />
        </div>
      </Panel>

      <GlassCard className="rounded-[28px] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-slate-900">Stitch screen details</div>
            <div className="mt-1 text-sm text-slate-600">Slug: {screenConfig.slug}</div>
          </div>
          <Link className="inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90" to="/stitch">
            Back to Stitch library
          </Link>
        </div>
      </GlassCard>
    </div>
  );
}
