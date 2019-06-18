ember-cartographer
==============================================================================

Ember Cartographer:
 - Swappable Map Engines for Graceful Degradation
 - Fastboot-enhanced, out of the box
 - UX-first, Accessibility-first

```
<EmberCartography as |map|>
  <map.layer
    @data={{as-geojson myData}}
    @onClick={{action this.layerClick}}
  >

  <map.layer>
</EmberCartography>
```

## Mapping Engines

 - MapboxGL
 - LeafletJS
 - Google Maps
 - ???

## Prioritize the best experiences
 - MapboxGL for fast computers, lots of bandwidth
 - Leaflet for slower computers, limited bandwidth
 - Fastboot pre-renderings of MapboxGL with option re-hydration

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cartographer
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
