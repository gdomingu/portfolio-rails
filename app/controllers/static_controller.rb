class StaticController < ApplicationController
  def home
    client = NasaApod::Client.new(api_key: 'NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
    @nasa_apod = client.search(date: Date.today)
    if @nasa_apod.explanation.nil?
      @nasa_apod = client.search(date: Date.yesterday)
    end
    @project_hash = {
      nasa_apod: {
        thumbnail_url: @nasa_apod.thumbnail_url
      },
      tip_calc: {
        thumbnail_url: 'https://s3-us-west-2.amazonaws.com/gabe-random/tip_calc.png'
      },
      move_loot: {
        thumbnail_url: 'https://s3-us-west-2.amazonaws.com/gabe-random/ml_user_dash.png'
      },
      smitten: {
        thumbnail_url: 'https://s3-us-west-2.amazonaws.com/gabe-random/landing.jpg'
      },
      hanoi: {
        thumbnail_url: 'https://s3-us-west-2.amazonaws.com/gabe-random/hanoiss.png'
      },
    }
    expires_in Time.now.end_of_day - Time.now, public: true
    render 'home'
  end

  def switch_date
    client = NasaApod::Client.new(api_key: 'NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
    @nasa_apod = client.search(date: date_params)
    if @nasa_apod.try(:code) == 429
      @error = "Sorry we've hit the rate limit for the API, please try again later."
    end
  end

  private

  def date_params
    params.require(:date).first
  end
end