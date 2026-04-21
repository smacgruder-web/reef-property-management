import { Link } from 'react-router-dom';
import GlassCard from '../components/shared/GlassCard';
import Panel from '../components/shared/Panel';
import { stitchScreens } from '@/data/stitchScreens';

export default function StitchGallery() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Panel title="Stitch screen library" subtitle="All screens exported from the Stitch design package."> 
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {stitchScreens.slice(0, 3).map((screen) => (
              <Link key={screen.slug} to={`/stitch/${screen.slug}`}>
                <GlassCard className="rounded-[28px] overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                  <img src={screen.previewImage} alt={screen.title} className="h-52 w-full object-cover" />
                  <div className="p-5">
                    <div className="text-sm font-semibold text-slate-900">{screen.title}</div>
                    <div className="mt-2 text-sm text-slate-500">{screen.subtitle}</div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </Panel>

        <GlassCard className="rounded-[28px] p-6">
          <div className="text-sm font-semibold text-slate-900">Stitch coverage</div>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>This page indexes exact Stitch screen exports, including preview assets and live HTML rendering.</p>
            <p>Click any card to open the exact Stitch screen in the app shell.</p>
          </div>
          <div className="mt-5 grid gap-3">
            {stitchScreens.slice(0, 6).map((screen) => (
              <Link
                key={screen.slug}
                to={`/stitch/${screen.slug}`}
                className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
              >
                {screen.title}
              </Link>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stitchScreens.map((screen) => (
          <Link key={screen.slug} to={`/stitch/${screen.slug}`}>
            <GlassCard className="rounded-[28px] overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <img src={screen.previewImage} alt={screen.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="text-sm font-semibold text-slate-900">{screen.title}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{screen.subtitle}</div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  View exact Stitch screen
                </div>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
