class StaticController < ApplicationController
  def home
    client = NasaApod::Client.new(api_key: 'DEMO_KEY')
    @nasa_apod = client.search(date: Date.today)
    @project_hash = {
      nasa_apod: {
        thumbnail_url: @nasa_apod.try(:url)
      },
      tip_calc: {
        thumbnail_url: 'https://s3-us-west-2.amazonaws.com/gabe-random/tip_calc.png'
      },
      smitten: {
        thumbnail_url: 'https://s3-us-west-2.amazonaws.com/gabe-random/landing.jpg'
      },
      dlp: {
        thumbnail_url: 'https://s3-us-west-2.amazonaws.com/gabe-random/dlphome.png'
      },
      hanoi: {
        thumbnail_url: 'https://s3-us-west-2.amazonaws.com/gabe-random/hanoiss.png'
      }
    }
    render 'home'
  end

  def switch_date
    client = NasaApod::Client.new(api_key: 'DEMO_KEY')
    @nasa_apod = client.search(date: date_params)
  end

  private

  def date_params
    params.require(:date).first
  end
end