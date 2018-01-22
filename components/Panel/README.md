# Panel

The panel is used as the main layout component and allows flowing content in different directions with different paddings and background materials. All components in the hierarchy of your application should be contained within one or more panels.

## Examples

```javascript
<Panel style={{ border: "1px solid #ccc" }} direction="vertical">
  <div>Content A</div>
  <div>Content B</div>
</Panel>
```

```javascript
<Panel style={{ border: "1px solid #ccc" }} direction="horizontal" stack>
  <Panel style={{ border: "1px solid #ccc" }} direction="vertical">
    <div>Content A</div>
  </Panel>
  <Panel style={{ border: "1px solid #ccc" }} direction="vertical" stretchX>
    <div>Content B</div>
    <div>Content C</div>
  </Panel>
</Panel>
```

## Usage

Use a stretched panel as the root component in your application to reflow all subelements and provide a solid background material. Further child panels can be used to create new columns and rows.

Panels utilize CSS flexbox for layout, and can be customized using the standard flexbox options.

## Options

Coming soon.
