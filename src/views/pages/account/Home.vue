<template>
    <div class="page-content header-clear-medium">

        <div data-card-height="240" class="card card-style rounded-m shadow-xl preload-img" data-src="images/pictures/18w.jpg">
            <div class="card-top mt-4 ms-3">
                <h1 class="color-white mb-0 mb-n2 font-22">{{ defaultCard.name }}</h1>
                <p class="bottom-0 color-white opacity-50 under-heading font-11 font-700">{{defaultCard.number}}</p>
            </div>
            <div class="card-top mt-4 me-3">
                <a href="#" data-menu="menu-add-funds" class="mt-1 float-end text-uppercase font-900 font-11 btn btn-s rounded-s shadow-l bg-highlight">Add Funds</a>
            </div>
            <div class="card-center text-center">
                <h1 class="color-white fa-4x">${{ defaultCard.amount }}</h1>
                <p class="color-white opacity-70 font-11 mb-n5">Remaining Account Ballance</p>
            </div>
            <div class="card-bottom">
                <p class="ms-3 font-10 font-500 opacity-50 color-white mb-2">Exp: {{ defaultCard.exp }}</p>
            </div>
            <div class="card-bottom">
                <p class="text-end me-3 font-10 font-500 opacity-50 color-white mb-2"><i class="fab fa-cc-visa font-20 rotate-90"></i></p>
            </div>
            <div class="card-overlay bg-black opacity-70"></div>
        </div>

        <div class="content mb-0">
            <div class="row mb-0">
                <div class="col-6 pe-1">
                    <a href="#" data-menu="menu-transaction-transfer"  class="card-style d-block bg-theme py-3 mx-0">
                        <span href="#" class="color-theme font-800 font-13 text-uppercase px-3"><i class="fa fa-arrow-up color-green-dark pt-2 pe-2 float-end"></i>Transfer</span>
                    </a>
                </div>
                <div class="col-6 ps-1">
                    <a href="#" data-menu="menu-transaction-request"  class="card-style d-block bg-theme py-3 mx-0">
                        <span href="#" class="color-theme font-800 font-13 text-uppercase px-3"><i class="fa fa-arrow-down color-blue-dark pt-2 pe-3 float-end"></i>Request</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="card card-style">
            <div class="content">
                <h4 class="font-700 text-uppercase color-highlight font-12 opacity-70 mb-3 mt-n2">Your Credit Cards</h4>
                
                <template v-for="(value, key) in cards">
                    <a href="#" data-menu="menu-credit-card" :key="'card-' + key" class="d-flex">
                        <div class="align-self-center">
                            <img src="../../../assets/images/framework/pay-2.png" width="50">
                        </div>
                        <div class="align-self-center ps-3">
                            <h5 class="mb-n2">{{ value.name }}</h5>
                            <p class="mt-n1 mb-0 font-10">{{ value.default ? 'Default Card' : '**** ' + value.number.substr(value.number.length - 4, value.number.length) }}</p>
                        </div>
                        <div class="align-self-center ms-auto ps-3">
                            <h5 class="mb-0">${{ value.amount }}</h5>
                        </div>
                    </a>

                    <div v-if="(key + 1) !== cards.length" class="divider mt-2 mb-2" :key="'divider' + key"></div>
                </template>

            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-0">
                <h4 class="font-700 text-uppercase font-12 color-highlight opacity-70 mb-3 mt-n2">Recent Transactions</h4>
                
                <a v-for="(item, key) in transactions" :key="key" href="#" data-menu="menu-transaction-1" class="d-flex mb-3">
                    <div class="align-self-center">
                        <img :src="item.image" width="40" class="rounded-xl me-3">
                    </div>
                    <div class="align-self-center">
                        <h1 class="mb-n2 font-16">{{ item.username }}</h1>
                        <p class="font-11 opacity-60">Paymennt {{ item.status }}</p>
                    </div>
                    <div class="align-self-center ms-auto text-end">
                        <h2 class="mb-n1 font-18" :class="item.status === 'Sent' ? 'color-red-dark' : 'color-green-dark'">${{ item.amount }}</h2>
                        <p class="font-12 opacity-50">{{ item.date }}</p>
                    </div>
                </a>
                
                <div class="divider"></div>
                <a href="page-finance-transactions.html" class="border-0 btn-center btn-s mb-2 mt-n4 color-highlight font-800 text-center d-block">VIEW ALL</a>
            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-3">
                <h4 class="font-700 text-uppercase font-12 color-highlight opacity-70 mb-3 mt-n2">General Overview</h4>
                <div class="mb-3">
                    <div class="progress mb-4" style="height:7px;">
                        <div class="progress-bar bg-highlight" role="progressbar" style="width: 40%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="row mb-0">
                        <div class="col-6">
                            <h5 class="mt-n3">Expenses</h5>
                        </div>
                        <div class="col-6">
                            <h5 class="mt-n3 text-end color-red-dark">$1120</h5>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="progress mb-4" style="height:7px;">
                        <div class="progress-bar bg-green-dark" role="progressbar" style="width: 60%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="row mb-0">
                        <div class="col-6">
                            <h5 class="mt-n3">Earnings</h5>
                        </div>
                        <div class="col-6">
                            <h5 class="mt-n3 text-end color-green-dark">$1530</h5>
                        </div>
                    </div>
                </div>
                <div class="mb-0">
                    <div class="progress mb-4" style="height:7px;">
                        <div class="progress-bar bg-blue-dark" role="progressbar" style="width: 80%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="row mb-0">
                        <div class="col-6">
                            <h5 class="mt-n3">Savings</h5>
                        </div>
                        <div class="col-6">
                            <h5 class="mt-n3 text-end color-blue-dark">$2530</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="card card-style">
            <div class="content mb-0">
                <h4 class="font-700 text-uppercase font-12 color-highlight opacity-70 mb-3 mt-n2">General Expenses</h4>
                <a href="#" data-menu="menu-expense-1" class="d-flex mb-3">
                    <div class="align-self-center">
                        <span class="icon icon-s rounded-xl bg-dark-dark me-3"><i class="fab fa-apple font-18"></i></span>
                    </div>
                    <div class="align-self-center">
                        <h1 class="mb-n2 font-16">Apple Music</h1>
                        <p class="font-11 opacity-60">Monthly Subscrption</p>
                    </div>
                    <div class="align-self-center ms-auto text-end">
                        <h2 class="mb-n1 font-18 color-red-dark">$9.99</h2>
                        <p class="font-12 opacity-50">15th July 2025</p>
                    </div>
                </a>
                <a href="#" data-menu="menu-expense-2" class="d-flex mb-3">
                    <div class="align-self-center">
                        <span class="icon icon-s rounded-xl bg-red-dark me-3"><i class="fa fa-mobile-alt font-14"></i></span>
                    </div>
                    <div class="align-self-center">
                        <h1 class="mb-n2 font-16">Cellular</h1>
                        <p class="font-11 opacity-60">Service Providers</p>
                    </div>
                    <div class="align-self-center ms-auto text-end">
                        <h2 class="mb-n1 font-18 color-red-dark">$14.99</h2>
                        <p class="font-12 opacity-50">15th July 2025</p>
                    </div>
                </a>
                <a href="#" data-menu="menu-expense-3" class="d-flex mb-3">
                    <div class="align-self-center">
                        <span class="icon icon-s rounded-xl bg-yellow-dark me-3"><i class="fa fa-bolt font-16"></i></span>
                    </div>
                    <div class="align-self-center">
                        <h1 class="mb-n2 font-16">Electricity</h1>
                        <p class="font-11 opacity-60">Utility Expense</p>
                    </div>
                    <div class="align-self-center ms-auto text-end">
                        <h2 class="mb-n1 font-18 color-blue-dark">$140.21</h2>
                        <p class="font-12 opacity-50">15th July 2025</p>
                    </div>
                </a>
                <div class="divider"></div>
                <a href="page-finance-transactions.html" class="btn-center btn-s mb-2 mt-n4 color-highlight font-800 text-center d-block">VIEW ALL</a>
            </div>
        </div>

        <Footer />

    </div>
</template>

<script>
import CardsData from './entities/Cards.js'
import RecentTransactions from './entities/RecentTransactions.js'
import Footer from '../../components/Footer.vue'



export default {
  name: 'Home',
  components: {
    /* eslint-disable vue/no-unused-components */
    Footer
    /* eslint-enable vue/no-unused-components */
  },
  props: {
    msg: String
  },
  data() {
    return {
        cards: CardsData,
        transactions: RecentTransactions
    }
  },
  computed: {
    defaultCard(){
        const card = this.cards.find(el => el.default === true);
        return card;
    }
  },
  mounted() {
    console.log('Home page')
  },
  methods: {
    
  }
}
</script>

<style>
.card-style.preload-img {
    background-image: url('../../../assets/images/pictures/18w.jpg');
    height: 240px;
}
</style>