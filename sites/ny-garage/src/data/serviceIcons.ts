/**
 * Which outline icon (components/Icon.astro) represents each service.
 *
 * Kept out of services.ts so the service data stays presentation-free: that
 * file feeds agent.json and the AI agent script, which have no use for icons.
 */
export const serviceIcons: Record<string, string> = {
  'garage-door-spring-replacement': 'spring',
  'garage-door-cable-repair': 'cable',
  'garage-door-opener-repair': 'opener',
  'garage-door-opener-installation': 'opener',
  'smart-garage-door-opener-installation': 'remote',
  'garage-door-off-track-repair': 'offtrack',
  'garage-door-panel-replacement': 'door',
  'new-garage-door-installation': 'install',
  'emergency-garage-door-repair': 'clock',
  'garage-door-tune-up': 'wrench',
};

export const iconFor = (slug: string): string => serviceIcons[slug] ?? 'door';
