import Phaser from 'phaser';

export type SceneKey = string;

export const SCENE_LOADERS: Record<string, () => Promise<Record<string, any>>> = {
  // Kids
  Act1Scene1: () => import('@/game/scenes/kids/Act1Scene1'),
  Act1Scene2: () => import('@/game/scenes/kids/Act1Scene2'),
  Act1Scene3: () => import('@/game/scenes/kids/Act1Scene3'),
  Act1Scene4: () => import('@/game/scenes/kids/Act1Scene4'),
  Act1Scene5: () => import('@/game/scenes/kids/Act1Scene5'),
  Act1Scene6: () => import('@/game/scenes/kids/Act1Scene6'),
  Act2Scene1: () => import('@/game/scenes/kids/Act2Scene1'),
  Act2Scene2: () => import('@/game/scenes/kids/Act2Scene2'),
  Act2Scene3: () => import('@/game/scenes/kids/Act2Scene3'),
  Act2Scene4: () => import('@/game/scenes/kids/Act2Scene4'),
  Act2Scene5: () => import('@/game/scenes/kids/Act2Scene5'),
  Act2Scene6: () => import('@/game/scenes/kids/Act2Scene6'),
  Act3Scene1: () => import('@/game/scenes/kids/Act3Scene1'),
  Act3Scene2: () => import('@/game/scenes/kids/Act3Scene2'),
  Act3Scene3: () => import('@/game/scenes/kids/Act3Scene3'),
  Act3Scene4: () => import('@/game/scenes/kids/Act3Scene4'),
  Act3Scene5: () => import('@/game/scenes/kids/Act3Scene5'),
  Act3Scene6: () => import('@/game/scenes/kids/Act3Scene6'),
  Act4Scene1: () => import('@/game/scenes/kids/Act4Scene1'),
  Act4Scene2: () => import('@/game/scenes/kids/Act4Scene2'),
  Act4Scene3: () => import('@/game/scenes/kids/Act4Scene3'),
  Act4Scene4: () => import('@/game/scenes/kids/Act4Scene4'),
  Act4Scene5: () => import('@/game/scenes/kids/Act4Scene5'),
  Act4Scene6: () => import('@/game/scenes/kids/Act4Scene6'),
  Act5Scene1: () => import('@/game/scenes/kids/Act5Scene1'),
  Act5Scene2: () => import('@/game/scenes/kids/Act5Scene2'),
  Act5Scene3: () => import('@/game/scenes/kids/Act5Scene3'),
  Act5Scene4: () => import('@/game/scenes/kids/Act5Scene4'),
  Act5Scene5: () => import('@/game/scenes/kids/Act5Scene5'),
  Act5Scene6: () => import('@/game/scenes/kids/Act5Scene6'),

  // Adults
  AdultAct1Scene1: () => import('@/game/scenes/adult/AdultAct1Scene1'),
  AdultAct1Scene2: () => import('@/game/scenes/adult/AdultAct1Scene2'),
  AdultAct1Scene3: () => import('@/game/scenes/adult/AdultAct1Scene3'),
  AdultAct1Scene4: () => import('@/game/scenes/adult/AdultAct1Scene4'),
  AdultAct1Scene5: () => import('@/game/scenes/adult/AdultAct1Scene5'),
  AdultAct1Scene6: () => import('@/game/scenes/adult/AdultAct1Scene6'),
  AdultAct2Scene1: () => import('@/game/scenes/adult/AdultAct2Scene1'),
  AdultAct2Scene2: () => import('@/game/scenes/adult/AdultAct2Scene2'),
  AdultAct2Scene3: () => import('@/game/scenes/adult/AdultAct2Scene3'),
  AdultAct2Scene4: () => import('@/game/scenes/adult/AdultAct2Scene4'),
  AdultAct2Scene5: () => import('@/game/scenes/adult/AdultAct2Scene5'),
  AdultAct2Scene6: () => import('@/game/scenes/adult/AdultAct2Scene6'),
  AdultAct3Scene1: () => import('@/game/scenes/adult/AdultAct3Scene1'),
  AdultAct3Scene2: () => import('@/game/scenes/adult/AdultAct3Scene2'),
  AdultAct3Scene3: () => import('@/game/scenes/adult/AdultAct3Scene3'),
  AdultAct3Scene4: () => import('@/game/scenes/adult/AdultAct3Scene4'),
  AdultAct3Scene5: () => import('@/game/scenes/adult/AdultAct3Scene5'),
  AdultAct3Scene6: () => import('@/game/scenes/adult/AdultAct3Scene6'),
  AdultAct4Scene1: () => import('@/game/scenes/adult/AdultAct4Scene1'),
  AdultAct4Scene2: () => import('@/game/scenes/adult/AdultAct4Scene2'),
  AdultAct4Scene3: () => import('@/game/scenes/adult/AdultAct4Scene3'),
  AdultAct4Scene4: () => import('@/game/scenes/adult/AdultAct4Scene4'),
  AdultAct4Scene5: () => import('@/game/scenes/adult/AdultAct4Scene5'),
  AdultAct4Scene6: () => import('@/game/scenes/adult/AdultAct4Scene6'),
  AdultAct5Scene1: () => import('@/game/scenes/adult/AdultAct5Scene1'),
  AdultAct5Scene2: () => import('@/game/scenes/adult/AdultAct5Scene2'),
  AdultAct5Scene3: () => import('@/game/scenes/adult/AdultAct5Scene3'),
  AdultAct5Scene4: () => import('@/game/scenes/adult/AdultAct5Scene4'),
  AdultAct5Scene5: () => import('@/game/scenes/adult/AdultAct5Scene5'),
  AdultAct5Scene6: () => import('@/game/scenes/adult/AdultAct5Scene6'),
};

export async function startScene(
  current: Phaser.Scene,
  key: string,
  exportName: string = key
): Promise<void> {
  if (!current.scene.get(key)) {
    const loader = SCENE_LOADERS[key];
    if (!loader) {
      throw new Error(`No lazy loader registered for scene "${key}"`);
    }
    const mod = await loader();
    const SceneClass = mod[exportName];
    current.scene.add(key, SceneClass, false);
  }
  current.scene.start(key);
}
