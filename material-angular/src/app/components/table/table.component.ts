import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface FoodEntry {
  id: number,
  counter: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
}

@Component({
  selector: 'app-form',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

  private counter: number = 0;
  private selection: SelectionModel<FoodEntry>;
  private displayedColumns = ['name', 'calories', 'fat', 'carbs', 'protein'];
  private dataSource: MatTableDataSource<FoodEntry>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create mock entries
    const entries: FoodEntry[] = [
      this.createData('Cupcake', 305, 3.7, 67, 4.3),
      this.createData('Donut', 452, 25.0, 51, 4.9),
      this.createData('Eclair', 262, 16.0, 24, 6.0),
      this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      this.createData('Gingerbread', 356, 16.0, 49, 3.9),
      this.createData('Honeycomb', 408, 3.2, 87, 6.5),
      this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      this.createData('Jelly Bean', 375, 0.0, 94, 0.0),
      this.createData('KitKat', 518, 26.0, 65, 7.0),
      this.createData('Lollipop', 392, 0.2, 98, 0.0),
      this.createData('Marshmallow', 318, 0, 81, 2.0),
      this.createData('Nougat', 360, 19.0, 9, 37.0),
      this.createData('Oreo', 437, 18.0, 63, 4.0)
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(entries);
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<FoodEntry>(allowMultiSelect, initialSelection);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  private createData(name, calories, fat, carbs, protein): Array<FoodEntry> {
    this.counter += 1;
    return {id: this.counter, name, calories, fat, carbs, protein};
  }

}

function
