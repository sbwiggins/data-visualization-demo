export class Architecture {

    constructor(
        private _architecutreId?: number,
        private _architectureName?: string,
        private _lastModifiedBy?: string,
        private _lastModifiedDate?: string,
        private _latestRevisionId?: number
    ) { }

    get architectureId() { return this._architecutreId }
    set architectureId(value) { this._architecutreId = value }

    get architectureName() { return this._architectureName }
    set architectureName(value) { this._architectureName = value }

    get lastModifiedBy() { return this._lastModifiedBy }
    set lastModifiedBy(value) { this._lastModifiedBy = value }

    get lastModifiedDate() { return this._lastModifiedDate }
    set lastModifiedDate(value) { this._lastModifiedDate = value }

    get latestRevisionId() { return this._latestRevisionId }
    set latestRevisionId(value) { this._latestRevisionId = value }

}
