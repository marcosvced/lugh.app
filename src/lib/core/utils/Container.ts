import type { Dependency } from '@/lib/core/utils/DependenciesProvider'

export class Container {
  private static instances: Map<string, any> = new Map()

  public static set(name: Dependency, instance: any): void {
    this.instances.set(name, instance)
  }

  public static get<T>(name: Dependency): T {
    const instance = this.instances.get(name)
    if (!instance) {
      throw new Error(`No provider found for ${name}`)
    }
    return instance
  }
}

export function inject(name: Dependency) {
  return function (target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      get: () => Container.get(name),
    })
  }
}
