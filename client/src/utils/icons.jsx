import React from 'react';
import { ChefHat, Droplet, Home, TreePine, SquarePlus, Droplets, Layout, Building } from 'lucide-react';

export const getIcon = (iconName) => {
  const iconMap = {
    'ChefHat': <ChefHat size={28} />,
    'Droplet': <Droplet size={28} />,
    'Home': <Home size={28} />,
    'TreePine': <TreePine size={28} />,
    'SquarePlus': <SquarePlus size={28} />,
    'Droplets': <Droplets size={28} />,
    'Layout': <Layout size={28} />,
    'Building': <Building size={28} />
  };
  return iconMap[iconName] || <Home size={28} />;
};

