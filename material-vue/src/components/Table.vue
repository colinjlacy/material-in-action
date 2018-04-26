<template>
  <div>
    <h2 class='md-display-2'>A Fancy Table</h2>
    <md-table v-model="tableData" md-card @md-selected="onSelect" md-sort="name" md-sort-order="asc" >
      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
        <md-table-cell md-label="Dessert (100g serving)" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Calories" md-sort-by="calories" md-numeric>{{ item.calories }}</md-table-cell>
        <md-table-cell md-label="Fat (g)" md-sort-by="fat" md-numeric>{{ item.fat }}</md-table-cell>
        <md-table-cell md-label="Carbs (g)" md-sort-by="carbs" md-numeric>{{ item.carbs }}</md-table-cell>
        <md-table-cell md-label="Protein (g)" md-sort-by="protein" md-numeric>{{ item.protein }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  let counter = 0;

  function createData(name, calories, fat, carbs, protein) {
    counter += 1;
    return {id: counter, name, calories, fat, carbs, protein};
  }

  export default {
    name: 'TableMultiple',
    data: () => ({
      selected: [],
      columnData: [
      	{id: 'name', label: 'Dessert (100g serving)'},
      	{id: 'calories', label: 'Calories'},
      	{id: 'fat', label: 'Fat (g)'},
      	{id: 'carbs', label: 'Carbs (g)'},
      	{id: 'protein', label: 'Protein (g)'}
      ],
      tableData: [
          createData('Cupcake', 305, 3.7, 67, 4.3),
          createData('Donut', 452, 25.0, 51, 4.9),
          createData('Eclair', 262, 16.0, 24, 6.0),
          createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
          createData('Gingerbread', 356, 16.0, 49, 3.9),
          createData('Honeycomb', 408, 3.2, 87, 6.5),
          createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
          createData('Jelly Bean', 375, 0.0, 94, 0.0),
          createData('KitKat', 518, 26.0, 65, 7.0),
          createData('Lollipop', 392, 0.2, 98, 0.0),
          createData('Marshmallow', 318, 0, 81, 2.0),
          createData('Nougat', 360, 19.0, 9, 37.0),
          createData('Oreo', 437, 18.0, 63, 4.0)
      ]
    }),
    methods: {
      onSelect (items) {
        this.selected = items
      }
    }
  }
</script>

<style scoped>
  h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .md-table + .md-table {
    margin-top: 16px
  }
</style>
