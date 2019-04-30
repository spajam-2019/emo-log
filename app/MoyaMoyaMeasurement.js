//もやもやしている人の割合を計測する
export class MoyaMoyaMeasurement {

    constructor() {
        this.listenerMap = {}
        this.changeMoyaMoyaLevel = () => { };
    }

    //新しいリスナーの追加
    AddListener(listenerId, listener) { }
    //リスナーの削除
    RemoveListener(listenerId) { }

    //モヤモヤレベルが更新されたときに呼ばれるイベントをセット
    set OnChangeMoyaMoyaLevel(val) { this.changeMoyaMoyaLevel = val }
}